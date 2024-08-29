import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,inject } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { OptionBottomSheetComponent } from './ui/option-bottom-sheet/option-bottom-sheet.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    CommonModule,MatSlideToggleModule,MatIconModule,MatBadgeModule, MatButtonModule,MatBottomSheetModule
  ],
  templateUrl: './material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {

  private _bottomSheet = inject(MatBottomSheet);
  openBottomSheet(){
    this._bottomSheet.open(OptionBottomSheetComponent)
  }
}
