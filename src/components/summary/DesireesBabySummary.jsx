import React, { useEffect } from 'react';

function DesireesBabySummary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container bg-white p-4" style={{ textAlign: 'justify' }}>
      <h1 className="mb-4 fw-bolder">Desiree's Baby</h1>
      <h2 className="mb-4 fw-bold">By Kate Chopin</h2>
      <h3 className="mt-4 fw-semibold text-center">Summary</h3>

      {/* Paragraph 1 */}
      <p className="fs-5">The story opens with Madame Valmonde visiting Desiree and her baby. On her way to L'Abri,
        she reminisces about Desiree's childhood. Desiree was a foundling discovered by Monsieur Valmonde. He
        found her "lying in the shadow of the big stone pillar" as he was galloping through the gateway to
        Valmonde. The general opinion was that she was left behind by a "party of Texans," but Madame Valmonde
        believed Desiree was sent to her by God as she was not able to have her children.</p>

      {/* Paragraph 2 */}
      <p className="fs-5">Eighteen years later, Armand Aubigny suddenly falls in love with Desiree when he sees her
        standing against the stone pillar, even though they have known each other since they were small
        children, ever since Armand and his father came from Paris after his mother died. Monsieur Valmonde
        proposes that before their relationship becomes more serious, Desiree's origins should be examined.
        However, Armand is so in love that he does not care about Desiree's ancestors and decides it does not
        matter that she does not have a family name of her own if he can give her a perfectly good one, and so
        they get married.</p>

      {/* Paragraph 3 */}
      <p className="fs-5">Madame Valmonde has a surprise awaiting her. She has not seen the baby for a month, and when
        she arrives in L'Abri, she is shocked to see the baby's appearance. Desiree remarks about how much he
        has grown. However, she does not see anything wrong with her son. She is very happy. Ever since the baby
        was born, her husband, Armand, who was very strict and harsh, has softened a great deal.</p>

      {/* Paragraph 4 */}
      <p className="fs-5">When the baby is three months old, the situation in the house changes. Desiree senses there
        is something wrong. On top of that, Armand becomes cold and avoids both Desiree and the baby. One
        afternoon, Desiree is sitting in her room and starts observing her child and a little quadroon boy who
        is fanning it. The similarity between them frightens her, and she sends the boy away.</p>

      {/* Paragraph 5 */}
      <p className="fs-5">When Armand arrives back home, Desiree asks him about the baby. He responds that indeed the
        baby is not white, which means that she is not white either. Desiree points out all her physical
        features that strongly suggest that she is white, but her angry husband tells her she is as white as
        their mixed-race slaves.</p>

      {/* Paragraph 6 */}
      <p className="fs-5">Desperate, Desiree writes to her mother, Madame Valmonde, asking for help. Madame Valmonde
        tells her to come back home because she still loves her. Afterward, Desiree asks her husband about his
        opinion, and he sends her away. As a result of that, Desiree takes her baby and leaves the house.
        However, she does not take the road leading to the Valmonde; instead, she disappears into the bayou.</p>

      {/* Paragraph 7 */}
      <p className="fs-5">Several weeks later, Armand sets up a bonfire to get rid of Desiree's belongings. Among the
        stuff he decides to throw away, Armand finds several letters. Most of them are "little scribblings"
        Desiree sent him in the days of their engagement, but he also finds one that is addressed from his
        mother to his father. In the letter, his mother thanks God for her husband's love, but she also reveals
        that she is grateful that her son will never know that his mother "belongs to the race that is cursed by
        slavery."</p>

      {/* Reference */}
      <div>
        <h3 class="mt-4 fw-semibold">Reference</h3>
        <p class="fs-5">GradeSaver. (2024, April 4). Desiree's Baby Summary. <i>GradeSaver.</i>
          <a href="https://www.gradesaver.com/desirees-baby/study-guide/summary" target="_blank" rel="noreferrer" class="text-decoration-none">
            https://www.gradesaver.com/desirees-baby/study-guide/summary
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
}

export default DesireesBabySummary;