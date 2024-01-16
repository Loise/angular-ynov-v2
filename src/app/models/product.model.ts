export class Product {
    constructor(
        public id: number,
        public title: string, 
        public description: string, 
        public imageUrl: string, 
        public price: number, 
        public likes: number, 
        public isLiked: boolean,
        public createdDate: Date,
        public size?: string[]) {
    }
}