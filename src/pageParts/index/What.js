import React from 'react';
import circle from '../../img/apparel-sourcing-circle-icon.png';
import triangle from '../../img/garment-production-triangle-icon.png';
import privatelabelimage from '../../img/privatelabelhero.png';
import brandsImage from '../../img/corporate-apparel-client-logos-pacsun-tillys-tjmaxx-zumeiz.jpg';
import square from '../../img/apparel-brand-fulfillment-square-icon.png';
import rectangle from '../../img/garment-manufacturing-technology-rectangle-icon.png';
import diamond from '../../img/apparel-design-diamond-icon.png';
import ShadowButton from '../../components/ShadowButton';
import boxlight from '../../img/white-label-screen-print-screen-wash.jpg';
import imgSourcing from '../../img/image_pop_sourcing.jpg';
import imgProduction from '../../img/image_pop_production.jpg';
import imgLogistics from '../../img/image_pop_logistics.jpg';
import imgTechnology from '../../img/image_pop_technology.jpg';
import imgDesign from '../../img/image_pop_design.jpg';
import squiggle from '../../img/white-label-thread-logo.png';
import Modal from '../../components/Modal';
import close from '../../img/close.png'

const Thing = (props) => (
  <div className={'thing ' + props.cssClass}>
    <img src={props.icon} />
    <div className="label">{props.label}</div>
    <ShadowButton onClick={(ev) => {
      ev.preventDefault();
      props.onClick();
    }}>Read More</ShadowButton>
  </div>
);

export default class What extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visiblePop: '',
      visibleReadMore: '',
      modalOpen: ''
    };
  }

  componentWillMount() {

  }

  _getPopClass(mainClass) {
    const popClass = `pop ${mainClass}`;
    if (this.state.visiblePop === mainClass)
      return `${popClass} visible`;
    return popClass;
  }

  _openModal = (modalName) => {
    this.setState({ modalOpen: modalName });
  }

  _isOpen = (modalName) => {
    return this.state.modalOpen === modalName;
  }

  _onClose = () => {
    this.setState({ modalOpen: '' });
  }

  render() {
    return (
      <section className="what">
        <h1>What We Do</h1>
        <div className="things">
          <h3><Thing icon={circle} label="Sourcing" onClick={() => this._openModal('sourcing')} /></h3>
          <h3><Thing icon={triangle} label="Production" onClick={() => this._openModal('production')} /></h3>
          <h3><Thing icon={square} label="Logistics" onClick={() => this._openModal('logistics')} /></h3>
          <h3><Thing icon={rectangle} label="Technology" onClick={() => this._openModal('technology')} /></h3>
          <h3><Thing icon={diamond} label="Design" onClick={() => this._openModal('design')} /></h3>
        </div>
          <Modal className="modalContent" open={this._isOpen('sourcing')} onClose={this._onClose}>
          <img className="image_pop_left" src={imgSourcing} />
          <div className="image_pop_right">
          <h1>Sourcing</h1>
          <ul>
            <p>We bring an extensive factory network, backed by strong relationships and decades of experience. Streamlined process of identifying, vetting, costing and sampling new products.</p>
            <br></br>
            <li>Custom blank and finished garment sourcing, both domestic & overseas</li>
            <li>Complex cut and sew, wash, dye and treated garments</li>
            <li>Shelf stock blank sourcing with all major and specialty mills</li>
            <li>Custom accessories, hard goods and promotional goods</li>
            <li>Global factory network, vetted and audited</li>
            <li>Onsite management, QC and inspection teams</li>
          </ul>
          </div>
        </Modal>
        <Modal className="modalContent" open={this._isOpen('production')} onClose={this._onClose}>
        <img className="image_pop_left" src={imgProduction} />
        <div className="image_pop_right">
        <h1>Production</h1>
        <ul>
          <p>A full package solution yields a seamless process, quicker turn times and lower cost. We combine decades of experience and a passion for automation and new technologies. A mix of company owned and 3rd party facilities span the globe, offering a wide range of materials, processes and techniques.</p>
          <br></br>
          <li>High volume and quick turn screen printing experts</li>
          <li>High volume direct to garment print and fulfillment</li>
          <li>Embroidery</li>
          <li>Cut and Sew blanks and embellished garments</li>
          <li>Full custom headwear & shelf stock embellishment</li>
          <li>Retail finishing (hang tags, SKU labels, size strips, poly bags, etc.)</li>
          <li>On-demand production and fulfillment for crowd funded and pre-sale models</li>
        </ul>
        </div>
        </Modal>
        <Modal className="modalContent" open={this._isOpen('logistics')} onClose={this._onClose}>
        <img className="image_pop_left"src={imgLogistics} />
        <div className="image_pop_right">
          <h1>Logistics</h1>
            <ul>
              <p>Pick, pack, ship, repeat. We provide the full range of value added warehousing and fulfillment services. The final step and a vital component to our full package private label solution where we ensure quality, accuracy and timeliness.</p>
              <br></br>
              <li>Retail and bulk shipments</li>
              <li>Direct to consumer drop shipments</li>
              <li>Event based distribution</li>
              <li>Inventory management</li>
              <li>Kitting and complex packing</li>
              <li>Custom packaging and inserts</li>
              <li>API connectivity to major shipping and e-commerce platforms</li>
            </ul>
            </div>
        </Modal>
        <Modal className="modalContent" open={this._isOpen('technology')} onClose={this._onClose}>
        <img className="image_pop_left" src={imgTechnology} />
        <div className="image_pop_right">
          <h1>Technology</h1>
            <ul>
              <p>The engine behind our solution is our proprietary software “capture”. Designed and developed in-house to provide ease and access for our clients while streamlining our global production and logistics management process.</p>
              <br></br>
              <li>Cloud based proprietary order management software allows for real time status updates on order progress</li>
              <li>Simplified order processing and tracking via client dashboard</li>
              <li>Automation of order data and status</li>
              <li>ERP and production management system</li>
              <li>Automation of account management and customer service</li>
              <li>Advanced visibility and reporting</li>
              <li>Real time inventory visibility and management</li>
            </ul>
            </div>
        </Modal>
        <Modal className="modalContent" open={this._isOpen('design')} onClose={this._onClose}>
        <img className="image_pop_left" src={imgDesign} />
        <div className="image_pop_right">
          <h1>Design</h1>
            <ul>
              <p>We sit at the convergence of current trends and evergreen style. We bring a deep understanding of fabrics, treatments and techniques across a variety of style genres.</p>
              <br></br>
              <li>Private label brand development and management</li>
              <li>Graphics, logo treatments</li>
              <li>Technical garment design</li>
              <li>Screen print separations</li>
              <li>Brand ideation and strategy</li>
              <li>Artwork cleanup and vectorization</li>
            </ul>
            </div>
        </Modal>

        <div className="privatelabelhero">
        <img className="privatelabel" src={privatelabelimage} />
        </div>

        <div className="logosheader">
          <h1>Who We Work With</h1>
        </div>
        <img className="brands" src={brandsImage} />

        <div className="additional">
          <img className="buildings" src={boxlight} />
          <div className="left">
            <img className="squiggle" src={squiggle} />
            <div className="buttons">
              <h3><a onClick={() => this.setState({ visiblePop: 'minimum' })}>Minimums</a></h3>
              <h3><a onClick={() => this.setState({ visiblePop: 'timeline' })}>Timelines</a></h3>
            </div>

            <div className={this._getPopClass('minimum')}>
              <h2 className="minpop">Minimums</h2>
              <ul>
              <p>
              MOQ’s are determined by product type and specific client requirements. While we offer single unit, on-demand production, this allowance is reserved for clients who maintain consistent programs and require monthly volume commitments.</p>
              <p>
              Cut and sew garment MOQ’s per style / color:</p>
              <li>Custom color / spec tees: 2400 pcs</li>
              <li>Custom color / spec fleece: 1200 pcs</li>
              <li>Custom color / spec headwear: 600 pcs</li>
              </ul>
              <a onClick={() => this.setState({ visiblePop: '' })}><img src={close} /></a>
            </div>

            <div className={this._getPopClass('timeline')}>
              <h2 className="minpop">Timelines</h2>
              <ul>
              <p>
              While we specialize in “just in time” and on-demand production, our turn times are dependent upon program specifics and individual client requirements.</p>
              <p>
              Domestic embellishment can be accomplished as quickly as 48 hours while more complex production can take up to a few months. We have a wide range of facilities capable of providing a solution for every time frame in between. </p>
              <p>
              Cut and sew garment timelines by COO:</p>
              <li>Mexico & Guatemala - 8-10 weeks</li>
              <li>China - 10-14 weeks</li>
              <li>Pakistan -  8-10 weeks (air), 14-16 weeks (sea)</li>
              <li>Bangladesh - 16-18 weeks</li>
              <li>USA - 4-8 weeks</li>
              </ul>
              <a onClick={() => this.setState({ visiblePop: '' })}><img src={close} /></a>
            </div>

          </div>
        </div>
      </section>
    )
  }
}
