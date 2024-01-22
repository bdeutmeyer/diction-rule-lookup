import '../App.css'
import '../index.css'

export default function Footer() {
    return (
        <div id="footer" className="container-fluid bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 text-center text-zinc-100">
            <div className="grid md:grid-cols-3 sm:grid-cols-2">

                {/* Diction rule sources */}
                <div className="py-2 px-3 m-3">
                    <h6>Sources:</h6>
                    <p><a href="https://www.dictionforsingers.com/diction/diction-for-singers-2nd-edition-228.html">Diction for Singers (Wall, Caldwell, et al)</a></p>
                    <p><a href="https://global.oup.com/academic/product/a-handbook-of-diction-for-singers-9780197639511?cc=us&lang=en&">A Handbook of Diction for Singers (Adams)</a></p>
                </div>

                {/* Beth's links */}
                <div className="py-2 px-3 m-3">
                    <h6>Created by <a href="https://www.linkedin.com/in/beth-deutmeyer-4b0b73238">Beth Deutmeyer</a></h6>
                    <p><a href="https://github.com/bdeutmeyer">GitHub</a></p>
                    <p><a href="https://lovely-meringue-5c5a8d.netlify.app/">Portfolio</a></p>
                </div>

                {/* Extra resources */}
                <div className="py-2 px-3 m-3">
                    <h6>More resources:</h6>
                    <p><a href="https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html">Interactive IPA Chart</a></p>
                    <p><a href="https://software.sil.org/gentium/">Gentium font for IPA</a></p>
                </div>
            </div>
        </div>
    )
}