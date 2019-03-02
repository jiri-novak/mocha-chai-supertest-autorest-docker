# kill and remove any running containers
function CleanUp() {
    & docker-compose -p ci kill
    & docker-compose -p ci rm -f
}

# build and run the composed services
docker-compose -p ci build
if (!$?) {
    Write-Error 'Docker-Compose build failed'
    exit -1
}

docker-compose -p ci up -d
if (!$?) {
    Write-Error 'Docker-Compose up failed'
    exit -1
}

# wait for the test service to complete and grab the exit code
$TEST_EXIT_CODE=$(docker wait ci_integration-tester_1)

# output the logs for the test (for clarity)
docker logs ci_integration-tester_1

# inspect the output of the test and display respective message
if ($TEST_EXIT_CODE -ne 0) {
  Write-Error "Tests Failed - Exit Code: $TEST_EXIT_CODE"
} 
else {
  Write-Host "Tests Passed" -ForegroundColor Green
}

# call the cleanup fuction
cleanup

# exit the script with the same code as the test service code
exit $TEST_EXIT_CODE