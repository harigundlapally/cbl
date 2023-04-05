export interface Plan {
    currency: string
    description: string
    feature_list: string
    pricing_id: string
    product_id: string
    recurring: {
        interval: string 
        interval_count: number
        usage_type: string
    }
    title: string
    type: string
    unit_amount: number
}