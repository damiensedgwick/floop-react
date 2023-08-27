# @feedback-loop/react

The Floop widget for React apps.

## Usage

### Install the Floop react package

`pnpm install @feedback-loop/react`

`npm install @feedback-loop/react`

`yarn add @feedback-loop/react`

### Import the widget into your application

`import { FloopWidget } from "@feedback-loop/react"`

### Use the Floop widget within your code

You can use the widget straight from installation, however, if you want to apply
your own styles to the trigger, which is left intentionally bare, we suggest you
create a wrapper so you can style it to your needs.

The React Floop Widget is used on our own dashboard, below is the exact code we
are using to import and use the widget.

```tsx
"use client";

import { FloopWidget } from "@feedback-loop/react";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  projectId: string;
  userEmail: string;
};

export const FloopWidgetButton = ({ projectId, userEmail }: Props) => {
  return (
    <FloopWidget projectId={projectId} userEmail={userEmail}>
      <span className={buttonVariants({ variant: "themed" })}>
        Give Feedback
      </span>
    </FloopWidget>
  );
}
```

We have also included the following data attributes so that you are able to
easily locate either the trigger, or the widget. This is to help aid you, should
you want to either add or change some of the styling or for testing.

```
data-floop-widget="widget-trigger" 
```

```
data-floop-widget="widget-popup"
```

## License

Licensed under the MIT license.
