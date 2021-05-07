import Div from '@/components/Elements/Div';
import Paragraph from '@/components/Elements/SampleParagraph'

export default function TicketSummary(){
  return(
    <>
        <Div style={{margin: '0 auto', textAlign: 'center', color: '#4E4E4E',font: "normal normal medium 20px/30px Poppins",marginTop: '58px'}}>
          <Paragraph content={'Ticket Summary'}></Paragraph>
        </Div>
    </>
  )
}