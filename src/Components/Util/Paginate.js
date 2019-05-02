import _ from 'lodash';


export function paginate(products, pageNumber, pageSize) {
    const starIndex = (pageNumber-1) * pageSize

    return _(products).slice(starIndex).take(pageSize).value()
}