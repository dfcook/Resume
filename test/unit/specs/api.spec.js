import getResume from '@/api/resources'

describe('api', () => {
  it('should return resume json', (done) => {
    getResume().then(resume => expect(resume).not.toBe(null))
    done()
  })
})
