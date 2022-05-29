import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective{
  //we need to attach open classs
 @HostBinding('class.open') isOpen=false;
//listen a click event of dropdown
@HostListener('click') toggleOpen(){
  this.isOpen=!this.isOpen;

}
// (placing the listener not on the dropdown, but on the document):

// @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
// }

// constructor(private elRef: ElementRef) {}
// }
}
