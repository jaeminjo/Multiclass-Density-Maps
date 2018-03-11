export default class Color {
    constructor(public r:number = 1, public g:number = 1, public b:number = 1, public a:number = 1) {

    }

    clamp() {
        return new Color(
            Math.min(Math.max(this.r, 0), 1),
            Math.min(Math.max(this.g, 0), 1),
            Math.min(Math.max(this.b, 0), 1),
            Math.min(Math.max(this.a, 0), 1)
        );
    }

    clone() {
        return new Color(this.r, this.g, this.b, this.a);
    }

    darken(v:number) {
        return new Color(this.r * v, this.g * v, this.b * v, this.a);
    }

    whiten(v:number) {
        return new Color(
        this.r + (1 - v) * (1 - this.r),
        this.g + (1 - v) * (1 - this.g),
        this.b + (1 - v) * (1 - this.b),
        this.a);
    }

    dissolve(v:number) {
        return new Color(this.r * v, this.g * v, this.b * v, this.a * v);
    }

    toString(){
        return ""+this.r+" "+this.g+" "+this.b+" "+this.a;
    }

    add(c:Color) {
        return new Color(
        this.r + c.r,
        this.g + c.g,
        this.b + c.b,
        this.a + c.a
        );
    }

    static compose(a:Color, fa:number, b:Color, fb:number) {
        return new Color(
        a.r * fa + b.r * fb,
        a.g * fa + b.g * fb,
        a.b * fa + b.b * fb,
        a.a * fa + b.a * fb
        );
    }

    static interpolate(a:Color, b:Color, r:number) {
        return Color.compose(a, 1 - r, b, r);
    }

    static White = new Color(1, 1, 1, 1);
    static Black = new Color(0, 0, 0, 1);
    static Blue = new Color(31 / 255, 120 / 255, 180 / 255, 1); // Blue
    static Orange = new Color(255 / 255, 127 / 255, 0 / 255, 1); // orange
    static Green = new Color(51 / 255, 160 / 255, 44 / 255, 1); // green
    static Red = new Color(211 / 255, 39 / 255, 40 / 255, 1);
    static Purple = new Color(148 / 255, 103 / 255, 189 / 255, 1);
    static Brown = new Color(140 / 255, 86 / 255, 75 / 255, 1);
    static Pink = new Color(227 / 255, 119 / 255, 194 / 255, 1);
    static Gray = new Color(127 / 255, 127 / 255, 127 / 255, 1);
    static Yellow = new Color(188 / 255, 189 / 255, 34 / 255, 1);
    static Skyblue = new Color(23 / 255, 190 / 255, 207 / 255, 1);
    static ColorByName:any = {
        "white": Color.White,
        "Black": Color.Black,
        "blue": Color.Blue,
        "orange": Color.Orange,
        "green": Color.Green,
        "red": Color.Red,
        "purple": Color.Purple,
        "brown": Color.Brown,
        "pink": Color.Pink,
        "gray": Color.Gray,
        "yellow": Color.Yellow,
        "skyblue": Color.Skyblue
    };
    static byName(name:string): Color {
        if (name in Color.ColorByName)
            return <Color>Color.ColorByName[name];
         return Color.Black;
    };

    static Category10 = [Color.Blue, Color.Orange, Color.Green, Color.Red, Color.Purple, Color.Brown, Color.Pink, Color.Gray, Color.Yellow, Color.Skyblue];
}
