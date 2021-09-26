import { shallowMount } from '@vue/test-utils'
import About from '@/views/About'

describe('Pruebas en el About view', function () {

  test('Debe renderizarse el componente correctamente', () => {
    
    const wraper = shallowMount( About )
    expect( wraper.html() ).toMatchSnapshot()

  })
  
})