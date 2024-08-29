import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-option-bottom-sheet',
  standalone: true,
  imports: [
    CommonModule,MatListModule,MatButtonModule
  ],
  templateUrl: './option-bottom-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionBottomSheetComponent {


openLink(event: MouseEvent): void {
  event.preventDefault();
}
 }
