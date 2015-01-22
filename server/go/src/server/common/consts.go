package common

import (
	"flag"
)

var WEBSITE_ROOT = flag.String("url", "https://coursepad.me/", "Web URL")

var ORIGIN = flag.String("origin", "coursepad.me", "Allow Origin")