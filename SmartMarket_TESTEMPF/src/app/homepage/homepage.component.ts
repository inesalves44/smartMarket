import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  productList: Product[]=[
    {productName: 'Cool Lettuce', productDesc:'', productPrice:'4.20€',productImage:'https://media.istockphoto.com/id/862629000/pt/foto/sunglasses-lettuce.jpg?s=612x612&w=0&k=20&c=QjjSKe-_IM5grq47effPp6i9ZcW1-Ypu2ncnBcSFOD8='},
    {productName: 'Cool Beans', productDesc:'', productPrice:'1.00€',productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFgHY6eg2n5p0VtodYMF596snwcDC2Fm1Q-gqLum6AiZhAnlV7wgzAGnIVAAp-Hswpvo&usqp=CAU'},
    {productName: 'Cool Rice', productDesc:'', productPrice:'1.40€',productImage:'data:image/png;base64,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'},
    {productName: 'Weird Tomato', productDesc:'', productPrice:'1.08€',productImage:'https://media.tenor.com/2j_oGXNNV2oAAAAd/tomato-creepy.gif'},
    {productName: 'Cool Sausages', productDesc:'', productPrice:'6.69€',productImage:'https://img.freepik.com/premium-vector/super-cool-sausage-food-character-mascot-isolated-cartoon-flat-style-design_574864-68.jpg?w=2000'},
    {productName: 'Cool Potatoes', productDesc:'', productPrice:'1.26€',productImage:'https://i.redd.it/k0o8jn56p1r11.jpg'},
    {productName: 'Annoying Orange', productDesc:'', productPrice:'41.26€',productImage:'https://media.tenor.com/2cEcr1Uj_JAAAAAC/annoying-orange-knife.gif'}];
}