import { hideAt } from './global'

export const SmallAndDown = hideAt({ min: '320px' })
export const MediumAndDown = hideAt({ min: '960px' })
export const MediumOnly = hideAt({ max: '640px', min: '960px' })
export const MediumAndUp = hideAt({ max: '640px' })
export const LargeAndUp = hideAt({ max: '960px' })