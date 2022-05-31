import { useJoinClassNames } from "../../../hooks/useJoinClassNames";
import ProductItemContainer from '../../Containers/ProductItemContainer'

type Props = {};

export default function ProductItemPage({}: Props) {
  return (
    <main>
      <div className={useJoinClassNames("Container", "Block")}>
        <ProductItemContainer/>
      </div>
    </main>
  );
}
