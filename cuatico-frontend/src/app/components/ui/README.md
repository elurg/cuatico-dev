# Componentes UI de Cuatico

Esta carpeta contiene los componentes de interfaz de usuario base que se utilizan en toda la aplicación Cuatico. Estos componentes están diseñados para ser reutilizables, consistentes y fáciles de usar.

## Componentes disponibles

### Avatar

Componente para mostrar imágenes de perfil de usuarios o profesores.

```html
<app-avatar 
  src="assets/profile.jpg" 
  alt="Nombre del usuario"
  size="md" 
  status="online"
  [fallbackText]="'John Doe'"
  [rounded]="true"
  [border]="true">
</app-avatar>
```

### Badge

Componente para mostrar etiquetas, estados o categorías.

```html
<app-badge variant="primary" size="md" [rounded]="true" icon="fas fa-check">
  Completado
</app-badge>
```

### Button

Componente para botones de acción.

```html
<app-button 
  variant="primary" 
  size="md" 
  [disabled]="false"
  [fullWidth]="false"
  type="button"
  icon="fas fa-plus"
  iconPosition="left"
  (clicked)="onButtonClick()">
  Añadir nuevo
</app-button>
```

### Card

Componente para tarjetas de contenido.

```html
<app-card 
  [padding]="'md'" 
  [border]="true" 
  [shadow]="'md'" 
  [rounded]="'md'" 
  [hover]="true"
  [clickable]="true">
  <!-- Contenido de la tarjeta -->
</app-card>
```

### Icon

Componente para mostrar iconos.

```html
<app-icon name="fas fa-user" size="md" color="blue-500"></app-icon>
```

### Input

Componente para campos de entrada de formulario.

```html
<app-input
  type="text"
  label="Nombre"
  placeholder="Introduce tu nombre"
  [hint]="'Este campo es obligatorio'"
  [error]="formErrors.name"
  [disabled]="false"
  [readonly]="false"
  [required]="true"
  size="md"
  [fullWidth]="true"
  icon="fas fa-user"
  iconPosition="left"
  [clearable]="true"
  (iconClick)="onIconClick()"
  (cleared)="onInputCleared()"
  (input)="onInputChange($event)">
</app-input>
```

### Progress

Componente para barras de progreso.

```html
<app-progress 
  [value]="75" 
  [max]="100" 
  size="md" 
  variant="primary" 
  [showLabel]="true"
  [animated]="true"
  [striped]="false">
</app-progress>
```

## Uso

Para utilizar estos componentes en tu aplicación, simplemente impórtalos en tu módulo o componente:

```typescript
import { Avatar, Badge, Button, Card, Icon, Input, Progress } from '../components/ui';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [Avatar, Badge, Button, Card, Icon, Input, Progress],
  templateUrl: './my-component.html'
})
export class MyComponent {
  // ...
}
```

O importa todos los componentes UI a la vez:

```typescript
import * as UI from '../components/ui';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [UI.Avatar, UI.Badge, UI.Button, UI.Card, UI.Icon, UI.Input, UI.Progress],
  templateUrl: './my-component.html'
})
export class MyComponent {
  // ...
}
```

## Personalización

Todos los componentes están diseñados para ser personalizables a través de sus propiedades de entrada. Consulta la documentación de cada componente para ver todas las opciones disponibles.