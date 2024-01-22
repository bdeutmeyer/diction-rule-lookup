export default function Header ({ headerOne, headerTwo, headerThree }) {
    return (
        <div className="bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-500">
            <a href="/" id="header-link"><h1 className="text-center pt-3 h1"><span id={headerOne}>Diction</span><span id={headerTwo}> Rule </span><span id={headerThree}>Lookup</span>  </h1></a>
            <p className="text-center pb-3">Your quick-reference guide to French, German, and Italian pronunciation rules</p>
        </div>
    )
}