JSHINT     = node_modules/.bin/jshint
MOCHA      = node_modules/.bin/mocha

SRC_DIR    = src
TEST_DIR   = tests

JS_EXT     = *.js

JS_FILES   = $(shell find $(SRC_DIR) -type f -name '$(JS_EXT)')
TEST_FILES = $(shell find $(TEST_DIR) -type f -name '$(JS_EXT)')

jshint:
	@$(JSHINT) $(JS_FILES) $(TEST_FILES)

test:
	@$(MOCHA) $(TEST_FILES)

.PHONY: jshint test
