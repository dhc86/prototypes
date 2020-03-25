import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @Output() refreshProducts =  new EventEmitter<any>();
  @ViewChild('productForm') public createProductForm: NgForm;
  sampleId: string = 'ffdsfh78545754nx8n5btb8bc5y345b8';
  defaultHtml: string = `<h1>Something cool right here!!</h1>`;

  constructor(
    private productsService: ProductService,
    private toastrService: ToastrService
  ) { }

  initEditor = {
    height: 250,
    menubar: false,
    branding: false,
    plugins: [
      'advlist autolink lists link image charmap emoticons print preview anchor table textareas anchor code media preview fullscreen'
    ],
    placeholder: 'Add content here...',
    file_picker_types: 'file image media',
    toolbar: 'preview | undo redo | formatselect | ' +
    ' bold italic underline backcolor forecolor | alignleft aligncenter alignright alignjustify ' +
    '| bullist numlist outdent indent | charmap emoticons | table | link image anchor | fullscreen' +
    '| media customHelp | code | alertSomething customImage ',
    // content_style: 'p { color: pink; margin: 10px; padding: 3px; }' + 'body { background-color: black; color: red;}',

    setup: (editor) => {
      let self = this;
      editor.ui.registry.addButton('alertSomething', {
        text: 'Alert',
        tooltip: 'Some random alert',
        onAction: (event) =>  {
          alert('Hello there, this is my awesome button!');
        }
      });

      editor.ui.registry.addButton('customImage', {
        icon: 'image',
        tooltip: 'Yeaaaa!!',
        disabled: false,
        onAction: (event) => {
          console.log('we can create a listener to open a custom modal, we can pass the ide of the product. ID:', self.sampleId);
        },
      });

      editor.ui.registry.addButton('customHelp', {
        icon: 'help',
        tooltip: 'Custom help',
        disabled: false,
        onAction: (event) => {
          alert('how cna I help??')
        },
      });

    }
  };

  ngOnInit(): void {

  }

  submitProduct(rawNewProduct){
    this.productsService.addProduct(rawNewProduct).subscribe((newProduct) => {
      this.toastrService.success("Product was created successfully!")
      this.refreshProducts.emit(newProduct);
    });

  }
}
