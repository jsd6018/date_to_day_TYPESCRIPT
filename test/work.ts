import {export_for_testing} from '../src/work'    
import {expect} from 'chai'
import {inputs} from '../src/input_cases' // VALUES FOR UNIT TESTS

describe('work',() => {

    it('Sanity check of Connection Establishment.',() => {

    })//just to confirm connection establishment

    it('Output computed for all days given inputs with 7 or more dates.',() => {
        let e = new export_for_testing()
        let i = new inputs()
        let r = e.get_result(i.test_values1)
        //console.log(r)
        expect(Object.keys(r).length).to.equal(7)
    })//given more than or 7 dates-values pairs, unit test to confirm addition is carried out for repetitive days of the week

    it('Output computed for all days given input with less than 7 dates',() => {
        let e = new export_for_testing()
        let i = new inputs()
        let r = e.get_result(i.test_values2)
        expect(Object.keys(r).length).to.equal(7)
    })//given less than 7 dates-values pairs, unit test to confirm avergae is being computed for missing days of the week

    it('The algorithm computes the mean appropriately wherever required',() => {
        let e = new export_for_testing()
        let i = new inputs()
        let r = e.get_result(i.test_values2)
        expect(JSON.stringify(r)).to.equal(JSON.stringify(i.test_results2))
    })//to match the result for an input with less than 7 dates-values pairs

    it('The algorithm computes the sum appropriately wherever required',() => {
        let e = new export_for_testing()
        let i = new inputs()
        let r = e.get_result(i.test_values1)
        expect(JSON.stringify(r)).to.equal(JSON.stringify(i.test_results1))
    })//to match the result for an input with more than 7 dates-values pairs

})

//=====================================================================================================================
//=====================================================================================================================