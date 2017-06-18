import { Component, Input } from '@angular/core';//Import decorator dependencies

@Component({
  selector: 'child',//selector
  template: `<!-- Modal -->
              <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">{{child_header}}</h4><!-- Interpolate the header data received from the parent -->
                    </div>
                    <div class="modal-body">
                      <p>{{child_body}}</p><!-- Interpolate the content data received from the parent  -->
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">{{child_footer}}</button><!--Interpolate the footer data received from the parent  -->
                    </div>
                  </div>

                </div>
              </div>`,
              
})


export class ChildComponent  { 
    @Input () child_header:string;//Input the child_header data from the parent
    @Input () child_body:string;//Input the child_body data from the parent
    @Input () child_footer:string;//Input the child_footer data from the parent
 }
