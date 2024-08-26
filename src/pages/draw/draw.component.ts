import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CanvasComponent } from '../../components/canvas/canvas.component';

@Component({
  selector: 'draw',
  standalone: true,
  imports: [CanvasComponent],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent implements AfterViewInit {
  open: boolean = false;

  setOpen(): void {
    this.open = !this.open
  }

  @ViewChild('canvas') public canvas: ElementRef | null = null
  private cx: CanvasRenderingContext2D | null = null;

  public ngAfterViewInit() {

  }
}
