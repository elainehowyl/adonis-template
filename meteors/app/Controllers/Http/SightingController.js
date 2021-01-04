'use strict'

class SightingController {
  index ({request, response}){

    const sightings = {"sightings":[
     {
      "date": "22/01/2020",
      "coordinate":{
        "lat":1.07,
        "lng":2.02
      }
    }
  ]
}
  return response.send(sightings)
  //    return response.json({
  //   "sightings":[
  //    {
  //     "date": "22/01/2020",
  //     "coordinate":{
  //       "lat":1.07,
  //       "lng":2.02
  //     }
  //   }
  // ]
  //    })
  }
  about(b){
    return b.view.render('sighting-index')
  }
  details({params, view}){
    let detailId = params.detail_id;
    return view.render('sighting-details', {
      'detailId':detailId
    })
  }
  location({params, view}){
    let locationId = params.location_id;
    return view.render('sighting-location', {
      'location_id':locationId
    })
  }
  create({view}){
    return view.render('sightings-create')
  }
  processCreate({request, view}){
    console.log(request.body)
    let {date, latitude, longtitude} = request.body
    let newInput = {
      'date':date,
      'latitude':latitude,
      'longtitude':longtitude
    }
    return view.render('sighting-details', newInput)
  }
}


module.exports = SightingController
