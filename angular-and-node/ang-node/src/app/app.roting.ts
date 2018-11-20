import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
{ path: '', component: DashboardComponent },
{ path: 'Produtos', component: ProdutosComponent },
{ path: 'Contato', component: ContatoComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);