import Hdr from '@/components/Elements/Header';
import Div from '@/components/Elements/Div';

export default function BlankHeader() {
  return (
    <Hdr noMargin>
      <Div widthFull noMargin style={{ 'min-height': '65px;' }}></Div>
    </Hdr>
  );
}
