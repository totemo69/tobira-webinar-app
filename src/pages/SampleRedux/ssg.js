import Page from './page'

export default function SSG() {
    return <Page />
}

export function getStaticProps() {
    return {
        props: {
            initialReduxState: {
                lastUpdate: Date.now(),
                ligth: false,
            },
        },
    }
}