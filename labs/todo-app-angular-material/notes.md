# Todo App with Angular 7 and Material

notes from :[creating-beautiful-apps-with-angular-material](https://auth0.com/blog/creating-beautiful-apps-with-angular-material/)

## Install Angular Material, Angular CDK and Angular Animations
  ```
    npm install @angular/material @angular/cdk @angular/animations
  ```

## Import the component modules

### Animations

  In "./src/app/app.module.ts":

  - To enable use:
    ~~~
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    ~~~
  - To disable use:
    ```
    import {NoopAnimationsModule} from '@angular/platform-browser/animations';
    ```

### Import the NgModule for each component you want to use
  ```
  import {MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  import {FormsModule} from '@angular/forms';  //for the form element


  //at the import section we add  all of this
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  ```

### Add the Material Icons and Theme and Style

  In "./src/index.html":
  ```
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```

  In "./src/styles.css":
  ```
  @import "~@angular/material/prebuilt-themes/deeppurple-amber.css";

  body{
    margin: 0;
  }

  .add-btn{
    position: fixed;
    right: 20px;
    bottom: 20Px;
  }
  ```

## Create Custom Components:

### HeaderComponent

  - in './src/app/header/header.component.html':
  ```
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>{{title}}</span>
    </mat-toolbar-row>
  </mat-toolbar>
  ```

  - in './src/app/header/header.component.css':
  ```
  span{
    font-size: 150%;
  }
  ```
### Add TodoService:
```
ng g s todo
```

### TodosComponent

```
ng g c todos
```

### AddTodoComponent
```
ng g c addTodo
```
