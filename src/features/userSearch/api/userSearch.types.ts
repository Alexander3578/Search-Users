type Geo = {
    lat: string
    lng: string
}

type UserAddress = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

type Company = {
    name: string
    catchPhrase: string
    bs: string
}

type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: UserAddress
    phone: string
    website: string
    company: Company
}
