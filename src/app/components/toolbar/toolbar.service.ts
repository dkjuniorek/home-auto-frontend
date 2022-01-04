import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToolbarService {
    loading = new BehaviorSubject<boolean>(false);


    constructor() {}

    onLoad = () => this.loading.next(true);

    onFinished = () => this.loading.next(false);
}




export interface ToolbarMenuItem {
    label: string;
    icon: string;
    link: string;
    showOnMobile: boolean;
    showOnTablet: boolean;
    showOnDesktop: boolean;
}