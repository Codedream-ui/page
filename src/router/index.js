import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

import AboutIcwrer from '@/pages/aboutIcwrer/aboutIcwrer'
import AboutIcwrerSpeakers from '@/pages/aboutIcwrer/aboutIcwrerSpeakers'
import AboutIcwrerCommittes from '@/pages/aboutIcwrer/aboutIcwrerCommittes'
import AboutIcwrerConferenceVenue from '@/pages/aboutIcwrer/aboutIcwrerConferenceVenue'

import Submissions from '@/pages/submissions/submissions'
import SubmissionsSessions from '@/pages/submissions/submissionsSessions'
import SubmissionsBestStudentPaperPrize from '@/pages/submissions/submissionsBestStudentPaperPrize'

import Agenda from '@/pages/agenda'
import Registration from '@/pages/registration'
import HotelAndTravel from '@/pages/hotelAndTravel'
import ContacUs from '@/pages/contacUs'

Vue.use(Router)

export default new Router({
  // 指定自定义class
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutIcwrer',
      name: 'AboutIcwrer',
      component: AboutIcwrer
    },
    {
      path: '/submissions',
      name: 'Submissions',
      component: Submissions
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/hotelAndTravel',
      name: 'HotelAndTravel',
      component: HotelAndTravel
    },
    {
      path: '/contacUs',
      name: 'ContacUs',
      component: ContacUs
    },
    {
      path: '/aboutIcwrerSpeakers',
      name: 'AboutIcwrerSpeakers',
      component: AboutIcwrerSpeakers
    },
    {
      path: '/aboutIcwrerCommittes',
      name: 'AboutIcwrerCommittes',
      component: AboutIcwrerCommittes
    },
    {
      path: '/aboutIcwrerConferenceVenue',
      name: 'AboutIcwrerConferenceVenue',
      component: AboutIcwrerConferenceVenue
    },
    {
      path: '/submissionsSessions',
      name: 'SubmissionsSessions',
      component: SubmissionsSessions
    },
    {
      path: '/submissionsBestStudentPaperPrize',
      name: 'SubmissionsBestStudentPaperPrize',
      component: SubmissionsBestStudentPaperPrize
    },
  ]
})
