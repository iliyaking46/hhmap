import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, ObjectManager, Button } from 'react-yandex-maps';
import PropTypes from 'prop-types';

import { loadMapData, updateYAMapState } from '../actions/map';
import { changePage } from '../actions/main';

class yaMap extends PureComponent {
  static propTypes = {
    app: PropTypes.objectOf(PropTypes.any).isRequired,
    map: PropTypes.objectOf(PropTypes.any).isRequired,
    mapState: PropTypes.objectOf(PropTypes.any).isRequired,
    // eslint-disable-next-line
    data: PropTypes.objectOf(PropTypes.any),
    changePage: PropTypes.func.isRequired,
    loadMapData: PropTypes.func.isRequired,
    updateYAMapState: PropTypes.func.isRequired,
  };
  componentDidMount() {
    if (!this.props.data) {
      this.props.changePage('map');
      this.props.updateYAMapState([55.76, 37.64], 10);
      const { app } = this.props;
      const searchMetroId = app.get('searchMetroId');
      const searchText = app.get('searchText');
      this.props.loadMapData(searchText, searchMetroId);
    } else {
      const coords = [
        this.props.data.get(0).getIn(['address', 'lat']),
        this.props.data.get(0).getIn(['address', 'lng']),
      ];
      this.props.updateYAMapState(coords, 15);
    }
  }

  onBoundsChange = event => {
    const { app } = this.props;
    const searchMetroId = app.get('searchMetroId');
    const searchText = app.get('searchText');

    const map = event.get('map');
    const coords = map.getBounds();
    const center = map.getCenter();
    const zoom = map.getZoom();
    this.props.updateYAMapState(center, zoom);
    this.props.loadMapData(searchText, searchMetroId, coords);
  };

  render() {
    const mapState = this.props.mapState.toJS();
    const data = this.props.data || this.props.map.get('data');
    const ymapData = data
      .filter(
        item =>
          item.get('address') &&
          item.getIn(['address', 'lat']) &&
          item.getIn(['address', 'lng']),
      )
      .map(item => ({
        type: 'Feature',
        id: item.get('id'),
        geometry: {
          type: 'Point',
          coordinates: [
            item.getIn(['address', 'lat']),
            item.getIn(['address', 'lng']),
          ],
        },
        properties: {
          balloonContentHeader: `
            <a href=/vacancies/${item.get('id')}
               target=_blank>
              ${item.get('name')}
            </a>
          `,
          balloonContentBody: `
            ${item.getIn(['employer', 'name'])}
            <br><br>
            <a href=/vacancies/${item.get('id')}
               target=_blank>
              Подробнее
            </a>
          `,
          balloonContentFooter: item.get('salary')
            ? item.getIn(['salary', 'from']) &&
              `от ${item.getIn(['salary', 'from'])}`
            : 'з/п не указана',
          clusterCaption: item.get('name'),
          hintContent: item.get('name'),
        },
        options: {
          preset: 'islands#blueCircleDotIconWithCaption',
          iconCaptionMaxWidth: '100',
        },
      }))
      .toJS();
    return (
      <div className="my-3">
        <YMaps>
          <Map
            state={mapState}
            width="100%"
            height={500}
            onBoundsChange={this.props.data ? null : this.onBoundsChange}
          >
            <Button
              data={{
                content: `Количество ваканский на карте ${ymapData.length}`,
              }}
              options={{ margin: 'auto', maxWidth: '600' }}
            />
            <ObjectManager
              options={{
                clusterize: true,
                gridSize: 32,
              }}
              objects={{
                preset: 'islands#blueDotIcon',
              }}
              clusters={{
                preset: 'islands#blueClusterIcons',
              }}
              features={ymapData}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}
export default connect(
  state => ({
    app: state.get('app'),
    map: state.get('ymap'),
    mapState: state.get('mapState'),
  }),
  { loadMapData, changePage, updateYAMapState },
)(yaMap);
