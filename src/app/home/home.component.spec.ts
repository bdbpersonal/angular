import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { RequestService } from '../request.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service : RequestService;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [RequestService] });
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(RequestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Calculator', () => {
  let component : HomeComponent;
  let fixture : ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia sumar', () => {
    expect(component.sumar(3,5)).toEqual(8);
  });

  it('deberia restar', () => {
    expect(component.restar(3,4)).toEqual(-1);
  });

  it('debria multiplicar', () => {
    expect(component.multiplicar(5,5)).toEqual(25);
  })

  it('deberia dividir', () => {
    expect(component.dividir(10,2)).toEqual(5);
  });
});
