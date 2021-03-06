/**
 * Static Cell Image
 */

class DCCCellImage extends DCCCell {
  static get observedAttributes () {
    return DCCBase.observedAttributes.concat(
      ['image'])
  }

  get image () {
    return this.getAttribute('image')
  }

  set image (newValue) {
    this.setAttribute('image', newValue)
  }

  createIndividual (row, col) {
    const element = this.createSVGElement('image', row, col)
    element.setAttribute('href', this.image)
    /*
      if (this._properties.rotate) {
         const center = this.space.computeCellCenter(row, col);
         element.setAttribute("transform",
            "rotate(" + this._properties.rotate + "," + center.x + "," + center.y + ")");
      }
      */
    return new DCCCellLight(this, element)
  }

  createIndividualInitial (row, col, props) {
    const light = super.createIndividualInitial(row, col, props)
    if (light.properties != null) {
      const center = this.space.computeCellCenter(row, col)
      /*
      if (light.properties.flip != null && light.properties.flip != '') {
        light.element.setAttribute('transform-origin', center.x + ' ' + center.y)
        light.element.setAttribute('transform',
          'scale(' + ((light.properties.flip == 'h') ? '-1,1' : '1,-1') + ')')
      }
      if (light.properties.rotate != null) {
        light.element.setAttribute('transform',
          'rotate(' + light.properties.rotate + ',' + center.x + ',' + center.y + ')')
      }
      */
    }
    return light
  }

  updateElementState (element, properties, row, col) {
    // console.log("=== center");
    // console.log(row + "," + col + "," + center.x + "," + center.y);
    if (properties != null) {
      /*
      const center = this.space.computeCellCenter(row, col)
      if (properties.flip != null && properties.flip != '') {
        light.element.setAttribute('transform-origin', center.x + ' ' + center.y)
        light.element.setAttribute('transform',
          'scale(' + ((properties.flip == 'h') ? '-1,1' : '1,-1') + ')')
      }
      if (properties.rotate != null)
        element.setAttribute('transform',
          'rotate(' + properties.rotate + ',' + center.x + ',' + center.y + ')')
      */
    }
  }
}

(function () {
  customElements.define('dcc-cell-image', DCCCellImage)
})()
