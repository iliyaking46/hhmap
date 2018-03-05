export default (count = 0, action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
    const {type} = action   // В главном редьюсере пришедшие "эктивы" будут прогонятся по всем подключённым мелким редьюсерам,
    // по этому в каждом таком редьюсере надо отбирать только те эктивы, которые ему нужны

    switch (type) {
        case 'INCREMENT': return count + 1
    }
    return count
}