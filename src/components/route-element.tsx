import React, {
  ComponentType,
  createElement,
  useEffect,
  useState,
  lazy,
  Suspense,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface ElementProps<Props> {
  load: () => Promise<{ default: ComponentType<Props> }>
  ignoreAuth?: boolean
  prefetch?: () => Promise<Props> | Props
}

export default function RouteElement<Props extends NonNullable<unknown> = NonNullable<unknown>>({ load, ignoreAuth, prefetch }: ElementProps<Props>) {
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);
  const [props, setProps] = useState<Props | undefined>();

  useEffect(() => {
    const init = async () => {
      if (!ignoreAuth) {
        navigate('/');
      }
      if (prefetch) {
        setProps(await prefetch());
      }
      setInitialized(true);
    };
    init();
  }, [navigate, ignoreAuth, prefetch, load]);

  return initialized ? (
    <Suspense>
      {createElement<Props>(lazy(load) as never, props)}
    </Suspense>
  ) : null;
}
