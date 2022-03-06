export interface Case {
    id: number
    title: string
    content: string
    cat_id: string
    image: string
    created_at: string
    reactions_count: string
    department_data: {
      id: number
      dep_name: string
    }
    
}
