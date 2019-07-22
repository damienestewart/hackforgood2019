import * as React from 'react';

/**
 * Footer component
 */
export class Footer extends React.Component {

  /**
   * Returns a rendered element representing the component
   */
  public render(): React.ReactNode {
    return (
      <footer id="uhf-footer" className="c-uhff context-uhf">
        <div className="c-uhff-base x-hidden-focus">
          <nav role="navigation" aria-label="Microsoft corporate links">
            <ul className="c-list f-bare">
              <li>
                <a className="c-uhff-link" href="https://www.microsoft.com/en-us/sitemap1.aspx" data-mscc-ic="false">Sitemap</a>
              </li>
              <li>
                <a className="c-uhff-link" href="https://support.microsoft.com/en-us/contactus" data-mscc-ic="false">Contact Microsoft</a>
              </li>
              <li>
                <a className="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkId=521839" data-mscc-ic="false">Privacy &amp; cookies</a>
              </li>
              <li>
                <a className="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkID=206977" data-mscc-ic="false">Terms of use</a>
              </li>
              <li>
                <a className="c-uhff-link" href="https://www.microsoft.com/trademarks" data-mscc-ic="false">Trademarks</a>
              </li>
              <li>
                <a className="c-uhff-link" href="https://www.microsoft.com/en-us/devices/safety-and-eco" data-mscc-ic="false">Safety &amp; eco</a>
              </li>
              <li>
                <a className="c-uhff-link" href="https://choice.microsoft.com" data-mscc-ic="false">About our ads</a>
              </li>
              <li>&#169; Microsoft 2018</li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}
