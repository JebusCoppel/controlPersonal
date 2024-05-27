export interface Candidate {
    id: string
    name: string
    firstLastName: string
    secondLastName: string
    street: string
    houseNumber: number
    neighborhood: string
    zipCode: number
    phone: number
    rfc: string
    documents: ImageBitmapRenderingContext
    status: string
    lastUpdate: Date
}
