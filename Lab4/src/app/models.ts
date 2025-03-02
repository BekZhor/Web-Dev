export class product{
  imageUrl: string
  name: string
  description: string
  rating: number

  constructor(imageUrl: string, name: string, description: string, rating: number) {
    this.imageUrl = imageUrl
    this.name = name
    this.description = description
    this.rating = rating
  }


}
