// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import NavbarController from "./navbar_controller"
application.register("navbar", NavbarController)

import PerformancesController from "./performances_controller"
application.register("performances", PerformancesController)

import HomepageController from "./homepage_controller"
application.register("homepage", HomepageController)
