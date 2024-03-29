import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterMenuItem, P4PMenuItems } from 'src/app/utils/menu-iteams';

@Component({
  selector: 'app-p4-p',
  templateUrl: './p4-p.component.html',
  styleUrls: ['../../modules/dashboard/dashboard.component.css']
})
export class P4PComponent {

  centerMenu: CenterMenuItem[] =[];

  constructor(private router: Router,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.centerMenu=P4PMenuItems;
  }

  handleClickCenter(menuItem: CenterMenuItem) {

    console.log(menuItem.label)
    if(menuItem.label==='Employee Rating'){
      this.router.navigateByUrl("/empRating");
     
    } 
    
    else if(menuItem.label==="View P4P Paid Details"){
      this.router.navigate(['/pfpPaidDetail']);
   
    }
    else{
      this.router.navigate(['/hr/p4p']);
   
    }
   
  }
}
