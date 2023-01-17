export{};

class Image
{
    Url:string;
    caption:string;
    constructor(image:string,caption:string)
    {
        this.Url=image;
        this.caption=caption;
    }
}
let list:Image[]=[];
let image1=new Image("Mosque1.jpg","Mosque1");
list[1]=image1;
let image2=new Image("Mosque2.jpg","Mosque2");
list[2]=image2;
let image3=new Image("Mosque3.jpg","Mosque3");
list[3]=image3;
let image4=new Image("Mosque4.jpg","Mosque4");
list[4]=image4;
let image5=new Image("Mosque5.jpg","Mosque5");
list[5]=image5;
let image6=new Image("Mosque6.jpg","Mosque6");
list[6]=image6;
let image7=new Image("Mosque7.jpg","Mosque7");
list[7]=image7;
let image8=new Image("Mosque8.jpg","Mosque8");
list[8]=image8;
let image9=new Image("Mosque9.jpg","Mosque9");
list[9]=image9;
let image10=new Image("Mosque10.jpg","Mosque10");
list[10]=image10;
let index:number=1;
function ChangeImageToPrevious()
{
    let img:HTMLImageElement =document.getElementById('imgdisp') as HTMLImageElement;
    if(index==1)
    {
        index=11;
    }
    index--;
    img.src=list[index].Url ;
    let cap:HTMLParagraphElement=document.getElementById('captiondisp') as HTMLParagraphElement;
    cap.innerHTML=`<p>${list[index].caption}</p>`;
}
function ChangeImageToNext()
{
    let img:HTMLImageElement =document.getElementById('imgdisp') as HTMLImageElement;
    if(index==10)
    {
        index=0;
    }
    index++;
    img.src=list[index].Url ;
    let cap:HTMLParagraphElement=document.getElementById('captiondisp') as HTMLParagraphElement;
    cap.innerHTML=list[index].caption
    
}