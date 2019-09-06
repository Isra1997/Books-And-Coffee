export class CoffeeRecipe{
    public name: string;
    public ImagePath:string;
    public History: string;
    public Ingredients:string[];

constructor(name:string,ImagePath:string,History:string,Ingredients:string[]){
    this.name=name;
    this.ImagePath=ImagePath;
    this.History=History;
    this.Ingredients=Ingredients;
}
}