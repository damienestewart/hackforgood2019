import * as React from 'react';

import './Header.scss';

import msLogo from '../../../assets/images/microsoftLogo.png';

/**
 * Header component
 */
export class Header extends React.Component {
  /**
   * The title for the site from the environment configuration
   */
  private siteName: string = process.env.REACT_SITE_NAME || '';

  /**
   * Returns a rendered element representing the component
   */
  public render(): React.ReactNode {
    return (
      <div id="headerRegion">
        <div id="headerUniversalHeader">
          <header role="banner" className="c-uhfh context-uhf c-sgl-stck c-category-header js">
            <div className="theme-light js-global-head f-closed global-head-cont">
              <div className="c-uhfh-gcontainer-st">
                <a id="uhfLogo" className="c-logo c-sgl-stk-uhfLogo" href="https://www.microsoft.com" aria-label="Microsoft">
                  <img alt="" className="c-image" src={msLogo} role="presentation" />
                  <span role="presentation">Microsoft</span>
                </a>
                <div className="f-mobile-title">
                  <button type="button" className="c-action-trigger c-glyph glyph-chevron-left" aria-label="See more menu options" />
                  <span data-global-title="Microsoft home" className="js-mobile-title">
                    {this.siteName}
                  </span>
                </div>
                <div className="c-show-pipe x-hidden-vp-mobile-st">
                  <a id="uhfCatLogo" className="c-logo c-cat-logo" href="/" aria-label={this.siteName}>
                    <span>{this.siteName}</span>
                  </a>
                </div>
                <div className="cat-logo-button-cont x-hidden">
                  <button
                    type="button"
                    id="uhfCatLogoButton"
                    className="c-cat-logo-button x-hidden x-hidden-focus"
                    aria-expanded="false"
                    aria-label={this.siteName}
                  >
                    {this.siteName}
                  </button>
                </div>
                <nav id="uhf-g-nav" aria-label="Contextual menu" className="c-uhfh-gnav">
                  <ul className="js-paddle-items">
                    <li className="single-link x-hidden-none-mobile-vp uhf-menu-item">
                      {/* tslint:disable-next-line: react-a11y-anchors */}
                      <a className="c-uhf-nav-link" href="/">
                        Home
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
