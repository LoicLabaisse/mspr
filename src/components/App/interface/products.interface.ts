export interface IProducts {
    createdAt : string,
    details: {
        color:string,
        description:string,
        price: string
    },
    id:string,
    name:string,
    stock:number
}