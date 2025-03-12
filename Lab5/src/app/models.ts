export class product{
  imageUrl: string
  name: string
  description: string
  rating: number
  category: string


  constructor(imageUrl: string, name: string, description: string, rating: number, category: string) {
    this.imageUrl = imageUrl
    this.name = name
    this.description = description
    this.rating = rating
    this.category = category
  }


}
