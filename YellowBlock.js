class YellowBlock extends Block 
{
    constructor(x,y)
    {
        super(x,y,20,40);
    }

    display()
    {
        if(this.body.speed<3)
        {
        fill("yellow")
        super.display();
        }
        else
        {
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visibility-5;
        tint(255, this.Visibility);
        rect(this.x, this.y,20,40);
        }
    }
}