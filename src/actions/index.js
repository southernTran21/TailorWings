/**
 * This is for Homepage
 */
export const updateCategories = (categories) => {
    return {
        type: 'UPDATE_CATEGORIES',
        categories
    }
} 
export const updateCollections = (collections) => {
    return {
        type: 'UPDATE_COLLECTIONS',
        collections
    }
} 
export const updateDesigns = (designs) => {
    return {
        type: 'UPDATE_DESIGNS',
        designs
    }
} 
export const updateFabrics = (fabrics) => {
    return {
        type: 'UPDATE_FABRICS',
        fabrics
    }
} 
export const updateProducts = (products) => {
    return {
        type: 'UPDATE_PRODUCTS',
        products
    }
}
export const updateDesigners = (designers) => {
    return {
        type: 'UPDATE_DESIGNERS',
        designers
    }
}
export const updateBestSeller = (bestSeller) => {
    return {
        type: 'UPDATE_BESTSELLER',
        bestSeller
    }
} 

/**
 * This is for Homepage
 */

export const updateCategoriesDesignNumber = (designNumber) => {
    return {
        type: 'UPDATE_CATEGORIES_DESIGN_NUMBER',
        designNumber
    }
} 