MOCHA      = ./node_modules/.bin/mocha

TEST_DIR   = tests

JS_EXT     = *.js

TEST_FILES = $(shell find $(TEST_DIR) -type f -name '$(JS_EXT)')

test:
	@$(MOCHA) $(TEST_FILES)

.PHONY: test
